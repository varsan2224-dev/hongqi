function PageLoader() {
  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center">
      <div
        className="w-12 h-12 rounded-full border-4 border-red-500/20
          border-t-red-500 animate-spin
          shadow-[0_0_25px_rgba(220,38,38,0.4)]"
      />
    </div>
  );
}

export default PageLoader;