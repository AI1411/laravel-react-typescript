<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => 'akira',
            'image' => url('/images/kiai.jpeg'),
            'email' => 'admin@admin.com',
            'location' => '東京都三鷹',
            'introduction' => 'Webエンジニア。得意なスキルはLaravelとReact。',
            'github' => 'https://github.com/AI1411',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        ];
    }
}
