<?php

namespace App\Controller\Auth;

use App\Controller\Controller;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Http\Event\LogoutEvent;

#[Route(path: '/auth/logout', methods: [Request::METHOD_POST])]
class AuthLogoutController extends Controller
{
    public function __invoke(Request $request, EventDispatcherInterface $eventDispatcher, TokenStorageInterface $tokenStorage): JsonResponse
    {
        try {
            $eventDispatcher->dispatch(new LogoutEvent($request, $tokenStorage->getToken()));

            return $this->success();
        } catch (\Throwable $exception) {
            return $this->error($exception->getMessage());
        }
    }
}
