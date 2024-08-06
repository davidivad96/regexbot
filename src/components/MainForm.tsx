import ArrowRightIcon from "@/components/ArrowRightIcon";
import { FormEventHandler } from "react";

type MainFormProps = {
  input: string;
  setInput: (input: string) => void;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  isLoading: boolean;
};

const MainForm: React.FC<MainFormProps> = ({
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
        placeholder="Match everything after the sequence 'https://'"
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
      >
        <ArrowRightIcon />
      </button>
    </label>
  </form>
);

export default MainForm;
