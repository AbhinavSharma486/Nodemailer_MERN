import express from 'express';
import { isAuthenticated, login, logout, register, resetPassword, sendResetOtp, sendVerifyOtp, verifyEmail } from '../controllers/auth.controller.js';
import userAuth from '../middleware/userAuth.js';

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.post("/send-verify-otp", userAuth, sendVerifyOtp);

router.post("/verify-account", userAuth, verifyEmail);

router.post("/is-auth", userAuth, isAuthenticated);

router.post("/send-reset-otp", sendResetOtp);

router.post("/reset-password", resetPassword);

export default router;
