import AppLayout from '@/components/Layouts/AppLayout';
import Head from 'next/head';
import Calendar from '@/components/Calendar';

const Dashboard = () => {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }>

            <Head>
                <title>
                    Diary｜日記管理画面
                </title>
            </Head>

            <div className="bg-white w-2/3 mx-auto mt-10">
                <Calendar />
            </div>            
        </AppLayout>
    )
}

export default Dashboard
