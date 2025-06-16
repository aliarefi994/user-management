import Link from "next/link";

    
export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl font-bold mb-4">۴۰۴ - صفحه پیدا نشد</h1>
        <p className="text-gray-500 mb-6">متأسفیم، صفحه مورد نظر شما وجود ندارد.</p>
        <Link
          href="/"
          className="text-blue-600 hover:underline"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    )
  }
  