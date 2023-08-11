import ModeToggle from "../ModeToggle";
import NavLinks from "../NavLinks";
import UserAvatar from "../UserAvatar";

export default function SiteHeader() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 shadow-sm backdrop-blur">
      <div className="container flex h-14 items-center">
        <NavLinks />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <ModeToggle />
          <UserAvatar />
        </div>
      </div>
    </header>
  );
}
