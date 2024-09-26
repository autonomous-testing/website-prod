import ButtonPrimary from "@site/src/components/buttons/ButtonPrimary";
import React from "react";

const SolutionIntroSection = () => {
  return (
    <div className="flex flex-col justify-center text-center text-balance gap-10 my-28 h-[80vh] bg-gradient-to-b from-transparent via-primary-wopee/60 dark:via-secondary-wopee/60 to-transparent">
      <div>
        <p className="text-4xl font-bold">
          Streamline Visual Testing with Wopee.io
        </p>
        <p className="text-3xl">
          <span className="text-secondary-wopee dark:text-primary-wopee font-bold">
            Simplify
          </span>
          ,{" "}
          <span className="text-secondary-wopee dark:text-primary-wopee font-bold">
            accelerate
          </span>{" "}
          and{" "}
          <span className="text-secondary-wopee dark:text-primary-wopee font-bold">
            reduce costs
          </span>{" "}
          with our effortless visual regression testing.
        </p>
      </div>

      <div>
        <ButtonPrimary
          label="Start free trial"
          href="https://cmd.wopee.io"
          className="w-60 h-[50px]"
        />
      </div>
    </div>
  );
};
export default SolutionIntroSection;
