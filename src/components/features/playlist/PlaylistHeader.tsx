import React, { useState, useRef } from "react";
import { Menu } from "lucide-react";
import toast from "react-hot-toast";

const PlaylistHeader = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false); // 애니메이션용
  const menuRef = useRef<HTMLDivElement>(null);
  const [isShareDisabled, setIsShareDisabled] = useState(false);

  const clickShare = async () => {
    if (isShareDisabled) return;

    setIsShareDisabled(true);
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("링크가 복사되었습니다!", {
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    } catch (err) {
      toast.error("링크 복사에 실패했습니다." + err, {
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  // 바깥 클릭 시 닫기
  React.useEffect(() => {
    if (!open) return;
    setShow(true);
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShow(false);
        setTimeout(() => setOpen(false), 200); // 애니메이션 후 닫기
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // 닫힐 때 애니메이션
  const handleClose = () => {
    setShow(false);
    setTimeout(() => setOpen(false), 200);
  };

  return (
    <div className="flex justify-end items-center h-12 w-full px-6 relative ${}">
      {open ? (
        <div
          ref={menuRef}
          className={`absolute top-0 right-0 w-full h-[calc(100vh-2rem)] min-h-[600px] max-h-[90vh] bg-black/90 z-40 flex flex-col items-center justify-center rounded-2xl shadow-2xl 
            transition-all duration-200
            ${show ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`}
        >
          <button
            className="absolute top-2 right-7 text-white text-3xl"
            onClick={handleClose}
          >
            ×
          </button>
          <ul className="text-white text-lg flex flex-col gap-6">
            <li className="hover:underline cursor-pointer" onClick={clickShare}>
              공유
            </li>
          </ul>
          <div className="absolute bottom-10 right-10">sylee8048@gmail.com</div>
        </div>
      ) : (
        <div className="flex items-center justify-between w-full lg:w-auto">
          <p className="lg:hidden">COMU - 음악 스트리밍</p>
          <button
            className="hover:cursor-pointer rounded-full z-50"
            onClick={() => {
              setOpen(true);
              setTimeout(() => setShow(true), 10); // mount 후 애니메이션
            }}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default PlaylistHeader;
