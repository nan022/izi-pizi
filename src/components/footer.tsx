// src/components/footer.tsx
export default function Footer() {
  return (
    <footer className="py-6 px-4 sm:px-6 lg:px-8 border-t border-border/30 bg-background">
      <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} izi pizi. Dibuat di Indonesia{" "}
          <img
            width="16"
            height="16"
            src="https://img.icons8.com/fluency/48/indonesia.png"
            alt="Indonesia"
            className="inline-block align-text-bottom"
          />{" "}
          oleh <a href="https://www.instagram.com/nandawithtech" className="hover:underline font-medium" target="_blank">Nanda </a>
          dengan bantuan <span className="font-medium">Qwen</span>.
        </p>
      </div>
    </footer>
  );
}