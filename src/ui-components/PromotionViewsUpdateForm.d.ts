/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PromotionViewsUpdateFormInputValues = {
    userID?: string;
    owner?: string;
};
export declare type PromotionViewsUpdateFormValidationValues = {
    userID?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PromotionViewsUpdateFormOverridesProps = {
    PromotionViewsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PromotionViewsUpdateFormProps = React.PropsWithChildren<{
    overrides?: PromotionViewsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    promotionViews?: any;
    onSubmit?: (fields: PromotionViewsUpdateFormInputValues) => PromotionViewsUpdateFormInputValues;
    onSuccess?: (fields: PromotionViewsUpdateFormInputValues) => void;
    onError?: (fields: PromotionViewsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PromotionViewsUpdateFormInputValues) => PromotionViewsUpdateFormInputValues;
    onValidate?: PromotionViewsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PromotionViewsUpdateForm(props: PromotionViewsUpdateFormProps): React.ReactElement;
