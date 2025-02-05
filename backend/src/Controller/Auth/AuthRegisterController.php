<?php

namespace App\Controller\Auth;

use App\Controller\Controller;
use App\DTO\Auth\AuthRegisterRequestDTO;
use App\Entity\User;
use App\Repository\UserRepository;
use App\Transformer\User\UserInfoDTOFromEntityTransformer;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Attribute\MapRequestPayload;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;

#[Route(path: '/auth/register', methods: [Request::METHOD_POST])]
class AuthRegisterController extends Controller
{
    public function __construct(
        private readonly UserRepository $userRepository
    )
    {
    }

    public function __invoke(
        #[MapRequestPayload] AuthRegisterRequestDTO $registerRequestDTO,
        UserPasswordHasherInterface                 $passwordHasher,
        JWTTokenManagerInterface                    $JWTManager
    ): JsonResponse
    {
        try {
            $user = new User();
            $user->setEmail($registerRequestDTO->email);
            $user->setName($registerRequestDTO->name);

            $hashedPassword = $passwordHasher->hashPassword(
                $user,
                $registerRequestDTO->password
            );

            $user->setPassword($hashedPassword);
            $this->userRepository->createUser($user);

            /** @var User $userEntity */
            $userEntity = $this->userRepository->findOneBy(['email' => $registerRequestDTO->email]);
            if (!$userEntity) {
                throw new \Exception('User not created.');
            }

            $token = $JWTManager->create($userEntity);

            return $this->success([
                'token' => $token,
                'expires' => $JWTManager->parse($token)['exp'],
                'user' => UserInfoDTOFromEntityTransformer::transform($userEntity)->toArray()
            ]);
        } catch (\Throwable $exception) {
            return $this->error($exception->getMessage());
        }
    }
}
