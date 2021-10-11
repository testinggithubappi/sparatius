<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('firstName');
            $table->string('LastName');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('contactNo')->nullable();
            $table->enum('roleType', ['customer', 'provider', 'admin']);
            $table->integer('status')->default(1);
            $table->rememberToken();
            $table->timestamps();
        });

        // $table->foreign('article_id')
        // ->references('id')
        // ->on('articles')
        // ->onCascade('delete');

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
