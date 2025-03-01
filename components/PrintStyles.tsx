'use client';

export default function PrintStyles() {
    return (
        <style jsx global>{`
            @media print {
                /* 기본 인쇄 스타일 */
                @page {
                    size: A4;
                    margin: 0.5cm;
                }

                body {
                    -webkit-print-color-adjust: exact !important;
                    print-color-adjust: exact !important;
                    color-adjust: exact !important;
                }

                /* 불필요한 요소 숨기기 */
                header,
                .no-print {
                    display: none !important;
                }

                /* 배경색 및 이미지 표시 */
                * {
                    -webkit-print-color-adjust: exact !important;
                    print-color-adjust: exact !important;
                }

                /* 페이지 나눔 방지 */
                .page-break-inside-avoid {
                    page-break-inside: avoid;
                }

                /* 특정 요소 이후 페이지 나눔 */
                .page-break-after {
                    page-break-after: always;
                }
            }
        `}</style>
    );
}
