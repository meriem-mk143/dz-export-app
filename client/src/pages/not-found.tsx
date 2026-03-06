export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-foreground">404</h1>
        <p className="text-muted-foreground text-lg">Page not found</p>
        <a href="/" className="text-primary underline hover:opacity-80">
          Go home
        </a>
      </div>
    </div>
  );
}
