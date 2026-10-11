// 결과 화면을 세로형 이미지(1080x1350)로 그려 PNG로 저장한다. 외부 라이브러리 없이 캔버스로 직접 그린다.
const WIDTH = 1080;
const HEIGHT = 1350;
const POINT = "#6E44FF";
const FONT = `"Pretendard", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif`;

export interface ResultCard {
  title: string;
  description: string;
  img: string;
}

// 글자 단위로 줄을 나눈다. 한글은 띄어쓰기 없이 길게 이어질 수 있어 단어 단위로만 자르면 넘친다.
// 다만 줄 첫머리에 공백이 오지 않게 한다.
export function wrapText(
  text: string,
  maxWidth: number,
  measure: (value: string) => number
) {
  const lines: string[] = [];
  let line = "";
  for (const ch of Array.from(text)) {
    if (line === "" && ch === " ") continue;
    if (measure(line + ch) > maxWidth && line !== "") {
      lines.push(line.trimEnd());
      line = ch === " " ? "" : ch;
    } else {
      line += ch;
    }
  }
  if (line) lines.push(line.trimEnd());
  return lines;
}

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

export async function drawResultCard(result: ResultCard) {
  const canvas = document.createElement("canvas");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("캔버스를 쓸 수 없습니다.");

  ctx.fillStyle = POINT;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  ctx.fillStyle = "#fff";
  roundRect(ctx, 60, 60, WIDTH - 120, HEIGHT - 120, 48);
  ctx.fill();

  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillStyle = POINT;
  ctx.font = `600 36px ${FONT}`;
  ctx.fillText("21세기 대한민국 철학과에 진학했다면?!", WIDTH / 2, 130);

  ctx.fillStyle = "#171717";
  ctx.font = `800 96px ${FONT}`;
  ctx.fillText(result.title, WIDTH / 2, 200);

  const image = await loadImage(result.img);
  const size = 380;
  ctx.drawImage(image, (WIDTH - size) / 2, 340, size, size);

  ctx.fillStyle = "#4B5563";
  ctx.font = `400 38px ${FONT}`;
  const lines = wrapText(result.description, WIDTH - 280, (value) => ctx.measureText(value).width);
  lines.slice(0, 8).forEach((line, index) => {
    ctx.fillText(line, WIDTH / 2, 770 + index * 58);
  });

  ctx.fillStyle = "#9CA3AF";
  ctx.font = `500 30px ${FONT}`;
  ctx.fillText("나의 철학과 포지션은?", WIDTH / 2, HEIGHT - 150);

  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error("이미지를 만들지 못했습니다."))), "image/png");
  });
}

export async function saveResultImage(result: ResultCard) {
  const blob = await drawResultCard(result);
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  // 한글 파일 이름은 일부 브라우저에서 무시되어 'download'로 저장되므로 영문으로 쓴다
  link.download = "philosophy-student-result.png";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
