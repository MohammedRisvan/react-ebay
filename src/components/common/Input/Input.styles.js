export const inputBaseStyles =
  `
  w-full
  rounded-md
  border
  border-gray-300
  bg-white

  px-4
  py-3

  text-sm

  transition-all
  duration-200

  focus:border-primary
  focus:ring-2
  focus:ring-primary/20

  disabled:cursor-not-allowed
  disabled:bg-gray-100
  disabled:opacity-60
`;

export const inputVariants = {
  default: "",

  error:
    `
    border-red-500
    focus:border-red-500
    focus:ring-red-200
    `,
};