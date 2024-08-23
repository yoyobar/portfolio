'use client';
import { aggro } from '@/util/fonts';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoIosLink } from 'react-icons/io';
import { twMerge as tw } from 'tailwind-merge';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { useToast } from '../ui/use-toast';
import { Progress } from '@radix-ui/react-progress';

const formSchema = z.object({
    userName: z
        .string()
        .min(2, {
            message: '이름은 2글자 이상 작성해야 합니다.',
        })
        .max(30, {
            message: '이름(별명)이 너무 깁니다.',
        }),
    userEmail: z.string().email({
        message: '유효한 이메일 주소를 입력해주세요.',
    }),
    content: z
        .string()
        .min(10, {
            message: '내용은 최소 10글자 이상 작성해야 합니다.',
        })
        .max(500, {
            message: '내용이 너무 깁니다. 500자 이내로 작성해주세요.',
        }),
});

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            userName: '',
            userEmail: '',
            content: '',
        },
    });

    const submitHandler = async (values: z.infer<typeof formSchema>) => {
        setIsSubmitting(true);
        try {
            const response = await fetch('api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error('이메일 전송에 실패했습니다.');
            }

            const truncatedContent = values.content.length > 20 ? values.content.slice(0, 20) + '...' : values.content;
            toast({
                title: '이메일 전송 완료',
                description: (
                    <div className="mt-2 space-y-2 bg-slate-950 p-4 rounded-md text-white w-[340px]">
                        <p>성명: {values.userName}</p>
                        <p>이메일: {values.userEmail}</p>
                        <p>내용: {truncatedContent}</p>
                    </div>
                ),
            });

            form.reset();
        } catch (error) {
            console.error('이메일 전송 오류:', error);
            toast({
                title: '오류',
                description: '이메일 전송에 실패했습니다. 나중에 다시 시도해 주세요.',
                variant: 'destructive',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const scrollHandler = () => {
        document.querySelector('.contact-container')?.scrollIntoView({
            behavior: 'smooth',
        });
    };
    return (
        <>
            <div className="z-10 relative w-full py-16 flex flex-col justify-center items-center h-fit">
                <div className="px-2 md:px-10 mb-20 max-w-[1200px] w-full flex flex-col gap-10 items-center justify-center">
                    <div className="flex gap-2 relative justify-center items-center">
                        <div onClick={scrollHandler} className="cursor-pointer w-[25px] h-[25px]">
                            <IoIosLink className="w-full h-full text-gray-600 hover:text-black" />
                        </div>

                        <div className={tw('text-[50px] font-extrabold border-b', aggro.className)}>Contact</div>
                    </div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(submitHandler)}
                            className="space-y-8 w-full max-w-lg border rounded-md p-4"
                        >
                            <FormField
                                control={form.control}
                                name="userName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>성명</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Name..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="userEmail"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>이메일</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="example@gmail.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="content"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>내용</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                className="overflow-y-hidden"
                                                placeholder="Message..."
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? '전송중...' : '제출'}
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default Contact;
