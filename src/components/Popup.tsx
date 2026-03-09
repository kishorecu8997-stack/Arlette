import "./Popup.css";

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function Popup({ isOpen, onClose, children }: PopupProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
