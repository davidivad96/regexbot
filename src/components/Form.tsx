import ArrowRightIcon from "@/components/ArrowRightIcon";
import { SUGGESTIONS } from "@/constants";
import { FormEventHandler } from "react";

type FormProps = {
  input: string;
  setInput: (input: string) => void;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  isLoading: boolean;
};

const Form: React.FC<FormProps> = ({
  input,
  setInput,
  handleSubmit,
  isLoading,
}) => (
  <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
    <label className="input input-primary input-bordered flex items-center gap-2">
      <input
        type="text"
        name="prompt"
        placeholder={SUGGESTIONS[0]}
        className="grow"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button
        type="submit"
        className={
          !input || isLoading
            ? "opacity-30 cursor-not-allowed"
            : "cursor-pointer"
        }
        aria-label="Submit"
      >
        <ArrowRightIcon />
      </button>
    </label>
  </form>
);

export default Form;
