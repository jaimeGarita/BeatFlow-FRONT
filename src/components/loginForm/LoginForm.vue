<template>
    <div class="login-container">
        <el-card class="login-card transparent-card container">
            <div slot="header" class="clearfix ">
                <h1>BeatFlow</h1>
            </div>
            <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
                <el-form-item label="Usuario" prop="username" label-class="custom-label">
                    <el-input v-model="loginForm.username"></el-input>
                </el-form-item>
                <el-form-item label="Contraseña" prop="password">
                    <el-input type="password" v-model="loginForm.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login" class="button">Ingresar</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>

import LoginFormJS from "./LoginForm";
import './LoginForm.css'
import '../../styles/main.css'

export default {
    ...LoginFormJS
};
</script>


