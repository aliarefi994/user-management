import UserTable from '../../component/users/UserTable'

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">مدیریت کاربران</h1>
      <UserTable />
    </main>
  )
}
