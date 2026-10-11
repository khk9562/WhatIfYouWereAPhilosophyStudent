import React, { useState } from "react";
import { shareLink } from "../../shared/share";
import { saveResultImage, ResultCard } from "../../shared/resultImage";

const SHARE_TITLE = "철학과 학생 테스트";

export function ShareButton({
  text,
  className = "btn btn-outline",
  label = "공유하기",
}: {
  text: string;
  className?: string;
  label?: string;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => shareLink(SHARE_TITLE, text)}
    >
      {label}
    </button>
  );
}

export function SaveImageButton({ result }: { result?: ResultCard }) {
  const [saving, setSaving] = useState(false);

  const save = async () => {
    if (!result || saving) return;
    setSaving(true);
    try {
      await saveResultImage(result);
    } catch {
      alert("이미지를 저장하지 못했어요. 잠시 후 다시 시도해 주세요.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <button
      type="button"
      className="btn btn-outline"
      onClick={save}
      disabled={!result || saving}
    >
      {saving ? "저장 중..." : "이미지 저장"}
    </button>
  );
}
