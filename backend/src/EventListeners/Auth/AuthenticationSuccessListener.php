<?php

namespace App\EventListeners\Auth;

use App\Entity\User;
use Lexik\Bundle\JWTAuthenticationBundle\Event\AuthenticationSuccessEvent;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;

readonly class AuthenticationSuccessListener
{
    public function __construct(
        private JWTTokenManagerInterface $JWTManager)
    {
    }

    /**
     * @param AuthenticationSuccessEvent $event
     * @return void
     */
    public function __invoke(AuthenticationSuccessEvent $event): void
    {
        $data = $event->getData();
        $user = $event->getUser();

        if (!$user instanceof User) {
            return;
        }

        $data['data']['user'] = [
            'email' => $user->getEmail(),
            'name' => $user->getName(),
            'image' => $user->getImage(),
            'roles' => $user->getRoles()
        ];

        $tokenData = $this->JWTManager->parse($data['token']);
        if (!$tokenData['exp'] ?? false) {
            return;
        }

        $data['data']['exp'] = $tokenData['exp'];
        $event->setData($data);
    }
}
