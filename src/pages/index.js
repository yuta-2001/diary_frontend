import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>日記管理アプリ</title>

            </Head>

            <header className="text-gray-600 body-font border-b-2">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 fill-black">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="block w-8 h-10">
                            <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
                        </svg>
                        <span className="ml-3 text-xl">Diary</span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    {user ? (
                            <Link
                                href="/dashboard"
                                className="ml-4 text-sm text-gray-700 underline">
                                Dashboard
                            </Link>
                            ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mr-3">
                                    Login
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>

                                <Link
                                    href="/register"
                                    className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                                    Register
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </>
                            )
                    }
                    </nav>
                </div>
            </header>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="sm:text-3xl text-2xl font-bold text-center title-font text-gray-900 mb-8">
                            日記管理アプリ<br />
                            Diary
                        </h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            日記を管理するアプリケーションのDiaryです。<br />
                            WEBアプリケーション上で主に以下の機能を使用できます。
                        </p>
                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium">日記の作成・編集・削除</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium">カレンダー上での日記管理</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium">キーワード検索で過去の日記を探す</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium">SNS風日記シェア機能【もちろん非公開も可能です。】</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 mx-auto flex justify-items-center flex-col">
                        {user ? (
                                <Link
                                    href="/dashboard"
                                    className="inline-block mx-auto w-30 h-15 mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    Dashboard
                                </Link>
                                ) : (
                                <>
                                    <Link
                                        href="/login"
                                        className="inline-block w-30 h-15 mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                        Login
                                    </Link>

                                    <Link
                                        href="/register"
                                        className="inline-block w-30 h-15 mx-auto mt-4 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                        Register
                                    </Link>
                                </>
                                )
                        }
                    </div>
                </div>
            </section>
            <footer className="text-gray-600 body-font border-t-2">
                    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                        <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 fill-black">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="block w-8 h-10">
                                <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
                            </svg>
                        </Link>
                        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 YutaSugimine
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a href="https://www.yupro.tech/" target="_blank" rel="noopener" className="text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-8 w-8">
                                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 136c0-13.3 10.7-24 24-24c137 0 248 111 248 248c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-110.5-89.5-200-200-200c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24c83.9 0 152 68.1 152 152c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.4-46.6-104-104-104c-13.3 0-24-10.7-24-24zm64 120c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z"/>
                            </svg>
                        </a>
                        <a href="https://twitter.com/lCjsDzftH9Uw1A3" target="_blank" rel="noopener" className="ml-3 text-gray-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        </span>
                    </div>
                </footer>
        </>
    )
}
