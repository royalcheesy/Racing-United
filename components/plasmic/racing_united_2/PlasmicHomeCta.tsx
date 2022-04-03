// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5VuZBYsf9XShsH8JN1E7RG
// Component: a4Y-Hq6o2G_xa
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import TextInput from "../../TextInput"; // plasmic-import: _YZ2ilro2tnpiR/component
import Button from "../../Button"; // plasmic-import: sQp0QwchPesocp/component

import { useScreenVariants as useScreenVariantsnjLjKdr2AGm9F7 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: njLjKdr2AGm9f7/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_racing_united_2.module.css"; // plasmic-import: 5VuZBYsf9XShsH8JN1E7RG/projectcss
import sty from "./PlasmicHomeCta.module.css"; // plasmic-import: a4Y-Hq6o2G_xa/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: 1GoaMUBwamwmwG/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: mUEok-zOcOYT2V/icon
import SphereIcon from "./icons/PlasmicIcon__Sphere"; // plasmic-import: PQRPJH6ZsxiJ3s/icon

export type PlasmicHomeCta__VariantMembers = {};

export type PlasmicHomeCta__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomeCta__VariantsArgs;
export const PlasmicHomeCta__VariantProps = new Array<VariantPropType>();

export type PlasmicHomeCta__ArgsType = {};
type ArgPropType = keyof PlasmicHomeCta__ArgsType;
export const PlasmicHomeCta__ArgProps = new Array<ArgPropType>();

export type PlasmicHomeCta__OverridesType = {
  root?: p.Flex<"div">;
  textInput?: p.Flex<typeof TextInput>;
  button?: p.Flex<typeof Button>;
  svg?: p.Flex<"svg">;
  textbox?: p.Flex<typeof TextInput>;
};

export interface DefaultHomeCtaProps {
  className?: string;
}

function PlasmicHomeCta__RenderFunc(props: {
  variants: PlasmicHomeCta__VariantsArgs;
  args: PlasmicHomeCta__ArgsType;
  overrides: PlasmicHomeCta__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsnjLjKdr2AGm9F7()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__o4Ijp)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__jb4Sy
          )}
        >
          {"Powering your business"}
        </div>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__wRfx0
          )}
        >
          {
            "Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente."
          }
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__rktsG)}
        >
          <TextInput
            data-plasmic-name={"textInput"}
            data-plasmic-override={overrides.textInput}
            className={classNames("__wab_instance", sty.textInput)}
            color={"dark" as const}
            placeholder={"Your email..." as const}
          />

          <Button
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            className={classNames("__wab_instance", sty.button)}
            color={"blue" as const}
          >
            {"Subscribe"}
          </Button>
        </p.Stack>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__jyTe
          )}
        >
          {"7 days free trial. No credit card required."}
        </div>
      </p.Stack>

      {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
        <div className={classNames(projectcss.all, sty.freeBox__zVqBu)}>
          <SphereIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg)}
            role={"img"}
          />
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "textInput", "textbox", "button", "svg"],
  textInput: ["textInput", "textbox"],
  button: ["button"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  textInput: typeof TextInput;
  button: typeof Button;
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomeCta__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomeCta__VariantsArgs;
    args?: PlasmicHomeCta__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomeCta__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomeCta__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomeCta__ArgProps,
      internalVariantPropNames: PlasmicHomeCta__VariantProps
    });

    return PlasmicHomeCta__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomeCta";
  } else {
    func.displayName = `PlasmicHomeCta.${nodeName}`;
  }
  return func;
}

export const PlasmicHomeCta = Object.assign(
  // Top-level PlasmicHomeCta renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),
    button: makeNodeComponent("button"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicHomeCta
    internalVariantProps: PlasmicHomeCta__VariantProps,
    internalArgProps: PlasmicHomeCta__ArgProps
  }
);

export default PlasmicHomeCta;
/* prettier-ignore-end */
