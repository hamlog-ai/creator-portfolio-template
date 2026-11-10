export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-6">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-6 text-lg text-muted-foreground">페이지를 찾을 수 없습니다.</p>
        <a href="/" className="border-b border-current pb-1 text-sm font-medium hover:text-muted-foreground">홈으로 돌아가기</a>
      </div>
    </div>
  );
}
