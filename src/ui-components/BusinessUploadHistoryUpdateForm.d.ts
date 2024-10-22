/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BusinessUploadHistory } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BusinessUploadHistoryUpdateFormInputValues = {
    uploadDate?: string;
    completionDate?: string;
    validCount?: number;
    total?: number;
    invalidCount?: number;
    originalPath?: string;
    invalidPath?: string;
};
export declare type BusinessUploadHistoryUpdateFormValidationValues = {
    uploadDate?: ValidationFunction<string>;
    completionDate?: ValidationFunction<string>;
    validCount?: ValidationFunction<number>;
    total?: ValidationFunction<number>;
    invalidCount?: ValidationFunction<number>;
    originalPath?: ValidationFunction<string>;
    invalidPath?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BusinessUploadHistoryUpdateFormOverridesProps = {
    BusinessUploadHistoryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uploadDate?: PrimitiveOverrideProps<TextFieldProps>;
    completionDate?: PrimitiveOverrideProps<TextFieldProps>;
    validCount?: PrimitiveOverrideProps<TextFieldProps>;
    total?: PrimitiveOverrideProps<TextFieldProps>;
    invalidCount?: PrimitiveOverrideProps<TextFieldProps>;
    originalPath?: PrimitiveOverrideProps<TextFieldProps>;
    invalidPath?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BusinessUploadHistoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: BusinessUploadHistoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    businessUploadHistory?: BusinessUploadHistory;
    onSubmit?: (fields: BusinessUploadHistoryUpdateFormInputValues) => BusinessUploadHistoryUpdateFormInputValues;
    onSuccess?: (fields: BusinessUploadHistoryUpdateFormInputValues) => void;
    onError?: (fields: BusinessUploadHistoryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BusinessUploadHistoryUpdateFormInputValues) => BusinessUploadHistoryUpdateFormInputValues;
    onValidate?: BusinessUploadHistoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BusinessUploadHistoryUpdateForm(props: BusinessUploadHistoryUpdateFormProps): React.ReactElement;
