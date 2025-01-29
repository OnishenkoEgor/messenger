<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Attribute\MapRequestPayload;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Core\User\UserInterface;

#[Route('/user')]
class UserController extends AbstractController
{
    public function __construct(private readonly UserRepository $userRepository)
    {
    }

    #[Route('/get/{id}', methods: ['GET'])]
    public function get(int $id): JsonResponse
    {
        try {
            $user = $this->userRepository->findOneBy(['id' => $id]);

            return $this->json(['user' => $user]);
        } catch (\Throwable $exception) {
            //TODO change here and other places error code
            return $this->json([
                'message' => $exception->getMessage()
            ], 400);
        }
    }

    #[Route('/get-all', methods: ['GET'])]
    public function getAll(): JsonResponse
    {
        try {
            return $this->json($this->userRepository->findAll());
        } catch (\Throwable $exception) {
            //TODO change here and other places error code
            return $this->json([
                'message' => $exception->getMessage()
            ], 400);
        }
    }

    #[Route('/parse',methods: ['POST'])]
    public function parse(string $token, JWTTokenManagerInterface $JWTManager): JsonResponse
    {
        try {
            $tokenData = $JWTManager->parse($token);
            return $this->json($tokenData);

        } catch (\Throwable $exception) {
            return $this->json([]);
        }
    }

    #[Route(path: '/update', methods: ['POST'])]
    public function update(): JsonResponse
    {
        try {
            return $this->json('success');
        } catch (\Throwable $exception) {
            return $this->json([
                'message' => $exception->getMessage()
            ], 400);
        }
    }

    #[Route(path: '/delete/{id}', methods: ['GET'])]
    public function delete(): JsonResponse
    {
        try {
            return $this->json('success');
        } catch (\Throwable $exception) {
            return $this->json([
                'message' => $exception->getMessage()
            ], 400);
        }
    }
}
