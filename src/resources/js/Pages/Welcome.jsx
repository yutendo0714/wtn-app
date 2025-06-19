import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div>
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-red-500 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-red-500 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-red-500 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="container mx-auto my-20 bg-gray-100">
                    <div className="grid grid-cols-3 gap-5">
                        <div className='col-span-3 p-4 bg-gray-200'>
                            <h1 className='font-bold text-5xl text-center'>わせテニ</h1>
                        </div>
                        <div className='col-span-3 p-4 bg-gray-200'>
                            <h2 className='text-2xl text-center'>Welcome to わせテニ</h2>
                        </div>

                        <div className='p-4 bg-gray-200'>
                            <div className='flex flex-row justify-center'>
                                <div className='h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center'>✔︎</div>
                                <p className='mx-2 my-auto'>募集を立ててメンバーを集めよう</p>
                            </div>
                        </div>
                        <div className='p-4 bg-gray-200'>
                            <div className='flex flex-row justify-center'>
                                <div className='h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center'>✔︎</div>
                                <p className='mx-2 my-auto'>チャットルームで当日の連絡もスムーズ</p>
                            </div>
                        </div>
                        <div className='p-4 bg-gray-200'>
                            <div className='flex flex-row justify-center'>
                                <div className='h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center'>✔︎</div>
                                <p className='mx-2 my-auto'>練習参加頻度で頑張りが見える化</p>
                            </div>
                        </div>

                        <div className="p-4 bg-gray-200">
                            <div className="flex flex-col justify-center items-center">
                                <div className="w-24 h-24 m-6 bg-gray-300 rounded-full text-2xl font-bold flex items-center justify-center">1</div>
                                <div>練習を作成</div>
                            </div>
                        </div>
                        <div className="p-4 bg-gray-200">
                            <div className="flex flex-col justify-center items-center">
                                <div className="w-24 h-24 m-6 bg-gray-300 rounded-full text-2xl font-bold flex items-center justify-center">2</div>
                                <div>参加者が集まる</div>
                            </div>
                        </div>
                        <div className="p-4 bg-gray-200">
                            <div className="flex flex-col justify-center items-center">
                                <div className="w-24 h-24 m-6 bg-gray-300 rounded-full text-2xl font-bold flex items-center justify-center">3</div>
                                <div>チャットで連携</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
