import * as React from "react";
import { forwardRef } from "react";

const CompassIcon = forwardRef((props: any, ref) => (
  <svg
    ref={ref}
    baseProfile="tiny"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 360 360"
    xmlSpace="preserve"
    {...props}
  >
    <path
      fill="currentColor"
      d="M171.72 11.26c.42 0 .7.07.77.14.14.14.14 2.25.14 6.24v6.03l-.35.28c-.14.14-.56.35-1.19.42-.56.07-.84.14-.91.14-.07.07-.14.35-.14.77 0 .49.07.7.14.77.07.07 1.4.14 4 .14 2.59 0 3.93-.07 4-.14.07-.07.14-.28.14-.77s0-.7-.07-.77-.42-.14-1.05-.21c-.63-.07-1.12-.14-1.33-.35l-.42-.21v-5.47c0-3.65.07-5.47.14-5.4.07 0 .84 1.26 2.38 3.79 2.17 3.65 3.93 6.45 5.19 8.49.42.63.84.98 1.19 1.05 1.61.21 2.59.14 2.95-.14.07-.07.14-2.45.14-7.08 0-4.14.14-6.38.21-6.94.07-.42.21-.63.49-.7.07 0 .42-.07.98-.14.7-.07 1.05-.14 1.12-.14.07 0 .14-.28.14-.77s-.07-.7-.14-.77c-.07-.07-1.4-.14-4-.14s-3.93.07-4 .14c-.07.07-.14.35-.14.77 0 .49.07.7.14.77.07.07.35.14.84.14.56.07.98.14 1.19.21l.42.14v4.84c0 3.23-.07 4.7-.14 4.63-.07-.07-.14-.28-.28-.49-.14-.14-.63-.98-1.54-2.52-3.02-4.98-4.63-7.71-4.98-8.06-.14-.14-.42-.35-.84-.49-2.1-.49-4.28-.49-6.52-.07-.42.07-.56.49-.42 1.19.21.47.77.68 1.75.68zM355.39 182.25c-.07-.42-.21-.63-.49-.7-.21-.07-.49-.07-.77 0-.21.07-.42.28-.49.63-.07.42-.14.98-.35 1.75-.14.84-.49 1.47-.84 1.89-.35.42-.77.63-1.19.77-.42.14-1.54.14-3.3.14h-2.74v-5.75h1.05c.84 0 1.47.14 1.75.42.28.21.49.84.56 1.75.14.56.14.84.21.91.07.07.35.14.77.14.42 0 .7-.07.77-.14.07-.07.14-1.19.14-3.44.07-2.24.07-3.58-.07-3.93-.07-.42-.21-.63-.49-.7-.21-.07-.49-.07-.77 0s-.49.28-.49.63c-.14.84-.35 1.54-.7 1.89-.14.21-.7.35-1.54.35h-1.2v-5.19l2.81.14c2.31.07 3.79.35 4.42.91.35.35.63.84.84 1.61.21.84.35 1.33.42 1.68.07.35.21.56.49.56.21.07.49.07.77 0s.49-.35.49-.84c.07-.49.14-1.54.07-3.23-.07-1.61-.14-2.52-.14-2.59-.07-.07-2.66-.14-7.85-.14-5.19 0-7.99 0-8.34.07-.49.07-.63.49-.49 1.26.07.21.28.42.7.49 1.19.14 1.89.42 2.03.77.14.21.14 2.17.14 5.68s-.07 5.47-.14 5.89c-.14.49-.77.84-1.75.84-.49.07-.84.14-.84.14-.07.07-.14.28-.14.77s.07.7.14.77c.07.07 2.88.14 8.28.14 5.4 0 8.21-.07 8.27-.14.07-.07.14-1.05.14-2.87-.07-1.72-.07-2.91-.14-3.33zM29.11 171.89c-1.96-.42-3.93-.42-5.89 0l-.42.14s0 .28.07.63c.07.49.14.77.14.84.07.07.35.14.77.14.49.07.77.14.84.28.14.14.21.42.21.77 0 .35-.42 1.96-1.19 4.98-.84 2.95-1.26 4.35-1.33 4.35s-.14-.07-.14-.14c-.21-.84-.7-2.38-1.47-4.77-.84-2.87-1.33-4.42-1.33-4.84 0-.28.49-.49 1.33-.63.35-.07.56-.21.63-.49.07-.28.07-.49 0-.84-.07-.21-.28-.42-.7-.49-.42-.07-1.61-.07-3.65-.07-2.03.07-3.09.14-3.15.14-.07.07-.14.28-.14.77s.07.7.14.77c.07.07.21.14.63.14.63.07 1.12.56 1.47 1.47l.28.7-1.33 4c-.84 2.59-1.33 4-1.47 4.14-.21.14-.49-.28-.84-1.54-.56-2.24-1.12-4.28-1.61-6.1l-.49-1.89.35-.35c.14-.21.49-.35.84-.42.42-.07.63-.14.63-.14.07-.07.14-.28.14-.77s-.07-.7-.14-.77c-.07-.07-1.19-.14-3.37-.14-2.24 0-3.44 0-3.72.07-.42.07-.56.49-.42 1.26.07.21.28.42.7.49.77.14 1.19.63 1.47 1.4l1.89 6.24c.91 3.15 1.54 5.26 1.89 6.24.14.7.42 1.12.49 1.19.14.14.63.14 1.4.14.91 0 1.54-.14 1.68-.28.14-.14.7-1.54 1.54-4.07.84-2.52 1.26-3.86 1.4-3.93.14-.28.49.21.84 1.54l1.61 5.33c.14.7.42 1.12.56 1.26.14.14.7.21 1.47.21.91 0 1.47-.07 1.61-.21.14-.14.49-.98.84-2.45.14-.63 1.05-3.79 2.66-9.4.42-1.19.63-2.03.84-2.32.14-.35.49-.56.91-.77.63-.28.91-.77.77-1.47.25-.13.11-.27-.24-.34zM328.24 178.46l-23.21-2.95c-2.46-65.21-54.98-117.74-120.19-120.19l-2.95-23.21c-.14-.84-.84-1.54-1.75-1.47-.84-.07-1.61.56-1.75 1.47l-2.95 23.21c-65.21 2.46-117.73 54.98-120.19 120.2l-23.21 2.95c-.84.14-1.54.84-1.47 1.75-.07.84.56 1.61 1.47 1.75l23.21 2.95c2.45 65.21 54.98 117.74 120.19 120.19l2.95 23.21c.14.84.84 1.54 1.75 1.47.84.07 1.61-.56 1.75-1.47l2.95-23.21c65.21-2.45 117.73-54.98 120.19-120.19l23.21-2.95c.84-.14 1.54-.84 1.47-1.75.07-.92-.63-1.69-1.47-1.76zM61.5 154.69l13.39-2.8-10.17-9.12c2.03-6.24 4.56-12.2 7.5-17.95l13.6.77-7.42-11.29c3.58-5.47 7.57-10.66 11.92-15.5l12.76 4.21-4.21-12.69c4.84-4.35 10.1-8.41 15.57-11.92l11.15 7.29-.77-13.32c5.82-2.95 11.85-5.47 18.16-7.5l8.84 9.88 2.66-12.97c6.59-1.4 13.32-2.24 20.2-2.59l-4.7 36.67c-18.3 2.17-34.85 10.17-47.68 22.02l-14.94-10.38 10.31 15c-11.85 12.9-19.84 29.45-22.02 47.68l-36.67 4.7c.27-6.86 1.11-13.67 2.52-20.19zm63.32-35.27c12.2-11.15 27.7-18.58 44.95-20.75l-6.1 47.33-38.85-26.58zm21.1 44.32-47.33 6.1c2.17-17.18 9.67-32.75 20.82-44.95l26.51 38.85zm9.26 135.13-2.87-13.6-9.33 10.45c-6.17-1.96-12.13-4.42-17.74-7.36l.84-13.96-11.71 7.64c-5.4-3.51-10.52-7.43-15.36-11.71l4.35-13.18-13.25 4.35c-4.28-4.77-8.27-9.89-11.78-15.29l7.64-11.57-13.88.77c-2.94-5.68-5.4-11.64-7.43-17.81l10.38-9.26-13.6-2.87c-1.4-6.45-2.24-13.18-2.6-19.98l36.67 4.7c2.17 18.3 10.17 34.85 22.02 47.68l-10.31 15.01 15.01-10.3c12.9 11.85 29.45 19.84 47.68 22.01l4.7 36.68c-6.53-.23-13.12-1.07-19.43-2.4zm-35.83-63.4c-11.15-12.2-18.58-27.7-20.75-44.95l47.33 6.1-26.58 38.85zm44.24-21.1 6.1 47.33c-17.18-2.17-32.75-9.68-44.95-20.83l38.85-26.5zm5.76-25.67-6.94 6.94-103.58-13.32v-.49h117.39l-6.87 6.87zm9.18-93.47v81.14l-2.66-2.66-11.15-11.15 8.35-64.51.35-2.59 4.7-36.47h.49l-.08 36.24zm27.07-33.52 2.67 12.9 8.76-9.82c6.38 2.03 12.48 4.56 18.3 7.57l-.77 13.11 10.94-7.15c5.61 3.65 10.87 7.64 15.71 12.06l-4.07 12.41 12.48-4.07c4.42 4.91 8.48 10.17 12.13 15.64l-7.15 10.94 13.18-.77c3.02 5.82 5.61 11.85 7.64 18.16l-9.82 8.76 12.97 2.66c1.47 6.73 2.38 13.67 2.66 20.76l-36.68-4.7c-2.17-18.3-10.16-34.85-22.02-47.68l10.31-15-15.08 10.31c-12.9-11.85-29.45-19.84-47.68-22.02l-4.7-36.67c6.89.21 13.63 1.2 20.22 2.6zm35.27 63.18c11.15 12.2 18.58 27.7 20.76 44.95l-47.33-6.1 26.57-38.85zm-44.32 21.18-6.1-47.33c17.18 2.17 32.75 9.68 44.95 20.83l-38.85 26.5zm-14.44 155.39h-.49V184l13.82 13.81-13.33 103.65zm53.29-60.52c-12.2 11.15-27.7 18.59-44.95 20.76l6.1-47.33 38.85 26.57zm-21.18-44.25 47.33-6.1c-2.17 17.18-9.68 32.75-20.82 44.95l-26.51-38.85zm84.57 8.49-13.11 2.74 10.03 8.97c-1.96 6.31-4.49 12.27-7.43 18.09l-13.46-.77 7.44 11.29c-3.58 5.47-7.51 10.66-11.85 15.57l-12.9-4.28 4.28 12.9c-4.77 4.35-9.89 8.41-15.36 11.92L235 274.25l.77 13.74c-5.68 2.95-11.64 5.47-17.81 7.5l-9.19-10.45-2.8 13.61c-6.66 1.47-13.54 2.31-20.47 2.59l4.7-36.68c18.3-2.17 34.85-10.17 47.68-22.01l15.01 10.3-10.31-15.01c11.85-12.9 19.85-29.45 22.02-47.68l36.68-4.7c-.39 6.75-1.16 13.34-2.49 19.72zm-33.73-26.58h-81.13l7.5-7.5 6.31-6.31 103.57 13.32v.49h-36.25z"
    />
  </svg>
));

CompassIcon.displayName = "CompassIcon"

export default CompassIcon;
