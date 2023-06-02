<template>
    <div class="login-container">
        <el-card class="login-card">
            <div slot="header" class="clearfix">
                <span>INICIO</span>
            </div>
            <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
                <el-form-item label="Usuario" prop="username">
                    <el-input v-model="loginForm.username"></el-input>
                </el-form-item>
                <el-form-item label="Contraseña" prop="password">
                    <el-input type="password" v-model="loginForm.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login">Ingresar</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>

import LoginFormJS from "./LoginForm";
import './LoginForm.css'

export default {
    ...LoginFormJS
};
</script>


