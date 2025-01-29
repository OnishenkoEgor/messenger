<?php

namespace App\Controller;

use App\DTO\Auth\RegisterUserDTO;
use App\Entity\User;
use App\Repository\UserRepository;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\MapRequestPayload;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Event\LogoutEvent;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

#[Route(path: '/auth')]
class AuthController extends AbstractController
{
    public function __construct(private readonly UserRepository $userRepository)
    {
    }

    #[Route(path: '/register', methods: ['POST'])]
    public function register(
        #[MapRequestPayload] RegisterUserDTO $userDto,
        UserPasswordHasherInterface          $passwordHasher,
        JWTTokenManagerInterface             $JWTManager): JsonResponse
    {
        try {
            $user = new User();
            $user->setEmail($userDto->email);
            $user->setName($userDto->name);

            $hashedPassword = $passwordHasher->hashPassword(
                $user,
                $userDto->password
            );

            $user->setPassword($hashedPassword);
            $this->userRepository->createUser($user);

            /** @var User $userEntity */
            $userEntity = $this->userRepository->findOneBy(['email' => $userDto->email]);
            if (!$userEntity) {
                throw new \Exception('User not created.');
            }

            return $this->json([
                'token' => $JWTManager->create($userEntity)
            ]);

        } catch (\Throwable $exception) {
            return $this->json([
                'message' => $exception->getMessage()
            ], Response::HTTP_BAD_REQUEST);
        }
    }

    #[Route(path: '/logout', methods: ['POST'])]
    public function logout(Request $request, EventDispatcherInterface $eventDispatcher, TokenStorageInterface $tokenStorage): JsonResponse
    {
        try {
            $eventDispatcher->dispatch(new LogoutEvent($request, $tokenStorage->getToken()));

            return $this->json([], Response::HTTP_OK);
        } catch (\Throwable $exception) {
            return $this->json([
                'message' => $exception->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
