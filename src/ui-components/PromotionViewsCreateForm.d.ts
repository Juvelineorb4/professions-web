/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PromotionViewsCreateFormInputValues = {
    userID?: string;
    owner?: string;
};
export declare type PromotionViewsCreateFormValidationValues = {
    userID?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PromotionViewsCreateFormOverridesProps = {
    PromotionViewsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PromotionViewsCreateFormProps = React.PropsWithChildren<{
    overrides?: PromotionViewsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PromotionViewsCreateFormInputValues) => PromotionViewsCreateFormInputValues;
    onSuccess?: (fields: PromotionViewsCreateFormInputValues) => void;
    onError?: (fields: PromotionViewsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PromotionViewsCreateFormInputValues) => PromotionViewsCreateFormInputValues;
    onValidate?: PromotionViewsCreateFormValidationValues;
} & React.CSSProperties>;
export default function PromotionViewsCreateForm(props: PromotionViewsCreateFormProps): React.ReactElement;
