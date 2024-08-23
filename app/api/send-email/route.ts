import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    const { userName, userEmail, content } = await request.json();

    const transporter = nodemailer.createTransport({
        service: 'naver',
        host: process.env.EMAIL_HOST,
        port: 465,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            replyTo: userEmail,
            to: process.env.EMAIL_USER,
            subject: `새로운 문의 - ${userName}`,
            text: `
        이름: ${userName}
        이메일: ${userEmail}
        내용: ${content}
      `,
            html: `
        <h2>새로운 문의가 도착했습니다.</h2>
        <p><strong>이름:</strong> ${userName}</p>
        <p><strong>이메일:</strong> ${userEmail}</p>
        <p><strong>내용:</strong> ${content}</p>
      `,
        });

        return NextResponse.json({ message: '이메일이 성공적으로 전송되었습니다.' });
    } catch (error) {
        console.error('이메일 전송 실패:', error);
        return NextResponse.json({ error: '이메일 전송에 실패했습니다.' }, { status: 500 });
    }
}
