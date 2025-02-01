<?php

namespace App\Transformer\User;

use App\DTO\User\UserInfoDTO;
use App\Entity\User;

class UserInfoDTOFromEntityTransformer
{
    /**
     * @param User $user
     * @return UserInfoDTO
     */
    public static function transform(User $user): UserInfoDTO
    {
        return new UserInfoDTO(
            email: $user->getEmail(),
            name: $user->getName(),
            image: $user->getImage(),
            roles: $user->getRoles()
        );
    }
}
