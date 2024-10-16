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
export declare type UserNotificationCreateFormInputValues = {
    title?: string;
    message?: string;
    type?: string;
    data?: string;
    owner?: string;
};
export declare type UserNotificationCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    data?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserNotificationCreateFormOverridesProps = {
    UserNotificationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    data?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserNotificationCreateFormProps = React.PropsWithChildren<{
    overrides?: UserNotificationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserNotificationCreateFormInputValues) => UserNotificationCreateFormInputValues;
    onSuccess?: (fields: UserNotificationCreateFormInputValues) => void;
    onError?: (fields: UserNotificationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserNotificationCreateFormInputValues) => UserNotificationCreateFormInputValues;
    onValidate?: UserNotificationCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserNotificationCreateForm(props: UserNotificationCreateFormProps): React.ReactElement;
