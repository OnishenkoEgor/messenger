<?php

namespace App\DTO\User;

readonly class UserInfoDTO
{
    public function __construct(
        public string  $email,
        public string  $name,
        public ?string $image,
        public array   $roles,
    )
    {
    }

    /**
     * @return array
     */
    public function toArray(): array
    {
        return [
            'email' => $this->email,
            'name' => $this->name,
            'image' => $this->image ?? '',
            'roles' => $this->roles
        ];
    }
}
