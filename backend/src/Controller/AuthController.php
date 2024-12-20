<?php

namespace App\Controller;

use App\Dto\Request\User\UserRegisterDto;
use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Attribute\MapRequestPayload;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/auth')]
class AuthController extends AbstractController
{
    public function __construct(private readonly UserRepository $userRepository)
    {
    }

    #[Route('/login')]
    public function login():JsonResponse
    {
        return new JsonResponse('test');
    }

    #[Route('/register')]
    public function register(#[MapRequestPayload] UserRegisterDto $userDto): JsonResponse
    {
        return new JsonResponse('test');
//        $user = new User();
//        $user->setEmail('');
//        $user->setPassword('')
//        $this->userRepository->
    }
}
