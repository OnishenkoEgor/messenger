<?php

namespace App\DTO\Auth;

readonly class ValidateUserDTO
{
    public function __construct(
        public string $token
    )
    {
    }
}
