import AppLayout from '@/components/Layouts/AppLayout';
import Head from 'next/head';
import Calendar from '@/components/Calendar';
import Link from 'next/link';

const Dashboard = () => {
    return (
        <AppLayout
            header={
                <div className="flex w-full justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        日記管理
                    </h2>
                    <Link
                        href="/register"
                        className="inline-block w-30 h-15 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        日記を作成
                    </Link>
                </div>
            }>

            <Head>
                <title>
                    Diary｜日記管理
                </title>
            </Head>

            <div className="bg-white w-2/3 mx-auto mt-10">
                <h2 class="font-bold mb-2">
                    日記カレンダー
                </h2>
                <Calendar />
            </div>
        </AppLayout>
    )
}

export default Dashboard
