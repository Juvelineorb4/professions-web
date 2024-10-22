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
export declare type BusinessUploadHistoryCreateFormInputValues = {
    uploadDate?: string;
    completionDate?: string;
    validCount?: number;
    total?: number;
    invalidCount?: number;
    originalPath?: string;
    invalidPath?: string;
};
export declare type BusinessUploadHistoryCreateFormValidationValues = {
    uploadDate?: ValidationFunction<string>;
    completionDate?: ValidationFunction<string>;
    validCount?: ValidationFunction<number>;
    total?: ValidationFunction<number>;
    invalidCount?: ValidationFunction<number>;
    originalPath?: ValidationFunction<string>;
    invalidPath?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BusinessUploadHistoryCreateFormOverridesProps = {
    BusinessUploadHistoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uploadDate?: PrimitiveOverrideProps<TextFieldProps>;
    completionDate?: PrimitiveOverrideProps<TextFieldProps>;
    validCount?: PrimitiveOverrideProps<TextFieldProps>;
    total?: PrimitiveOverrideProps<TextFieldProps>;
    invalidCount?: PrimitiveOverrideProps<TextFieldProps>;
    originalPath?: PrimitiveOverrideProps<TextFieldProps>;
    invalidPath?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BusinessUploadHistoryCreateFormProps = React.PropsWithChildren<{
    overrides?: BusinessUploadHistoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BusinessUploadHistoryCreateFormInputValues) => BusinessUploadHistoryCreateFormInputValues;
    onSuccess?: (fields: BusinessUploadHistoryCreateFormInputValues) => void;
    onError?: (fields: BusinessUploadHistoryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BusinessUploadHistoryCreateFormInputValues) => BusinessUploadHistoryCreateFormInputValues;
    onValidate?: BusinessUploadHistoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function BusinessUploadHistoryCreateForm(props: BusinessUploadHistoryCreateFormProps): React.ReactElement;
