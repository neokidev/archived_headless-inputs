import React from "react";
import { NumberInput as NumberInputWC } from "@headless-inputs/web-components/number-input";
import { createComponent } from "@lit/react";

export const NumberInput = createComponent({
  react: React,
  elementClass: NumberInputWC,
  tagName: "number-input",
});
