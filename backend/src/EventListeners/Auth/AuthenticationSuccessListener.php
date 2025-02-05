<?php

namespace App\EventListeners\Auth;

use App\Entity\User;
use App\Transformer\User\UserInfoDTOFromEntityTransformer;
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

        $tokenData = $this->JWTManager->parse($data['token']);
        if (!$tokenData['exp'] ?? false) {
            return;
        }

        $event->setData([
            'response' => [
                'token' => $data['token'],
                'expires' => $tokenData['exp'],
                'user' => UserInfoDTOFromEntityTransformer::transform($user)->toArray()
            ]
        ]);
    }
}
