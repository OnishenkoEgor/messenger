<?php

namespace App\Controller;

use App\Dto\Request\User\UserLoginDto;
use App\Dto\Request\User\UserRegisterDto;
use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Attribute\MapRequestPayload;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/auth')]
class AuthController extends AbstractController
{
    public function __construct(private readonly UserRepository $userRepository)
    {
    }

    #[Route('/register')]
    public function register(#[MapRequestPayload] UserRegisterDto $userDto, UserPasswordHasherInterface $passwordHasher): JsonResponse
    {
        try {
            $user = new User();
            $user->setEmail($userDto->email);

            $hashedPassword = $passwordHasher->hashPassword(
                $user,
                $userDto->password
            );

            $user->setPassword($hashedPassword);
            $this->userRepository->createUser($user);

            return $this->json([
                'message' => 'User registered'
            ]);
        } catch (\Throwable $exception) {
            return $this->json([
                'message' => $exception->getMessage()
            ], 400);
        }
    }
}
