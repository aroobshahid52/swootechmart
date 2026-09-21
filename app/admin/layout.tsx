// import AdminGuard from "./AdminGuard";

// export default function AdminLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <AdminGuard>
//       {children}
//     </AdminGuard>
//   );
// }
import AdminGuard from "./AdminGuard";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AdminGuard>{children}</AdminGuard>;
}