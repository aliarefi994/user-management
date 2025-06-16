
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-10 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          داشبورد مدیریت کاربران
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          برای مشاهده و مدیریت کاربران، وارد پنل شوید.
        </p>
        <Link
          href="/users"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-base font-medium hover:bg-blue-700 transition"
        >
          ورود به صفحه مدیریت کاربران
        </Link>
      </div>
    </div>
  );
}
