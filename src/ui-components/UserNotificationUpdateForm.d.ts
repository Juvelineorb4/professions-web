/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UserNotification } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserNotificationUpdateFormInputValues = {
    title?: string;
    message?: string;
    type?: string;
    data?: string;
    owner?: string;
};
export declare type UserNotificationUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    data?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserNotificationUpdateFormOverridesProps = {
    UserNotificationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    data?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserNotificationUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserNotificationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userNotification?: UserNotification;
    onSubmit?: (fields: UserNotificationUpdateFormInputValues) => UserNotificationUpdateFormInputValues;
    onSuccess?: (fields: UserNotificationUpdateFormInputValues) => void;
    onError?: (fields: UserNotificationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserNotificationUpdateFormInputValues) => UserNotificationUpdateFormInputValues;
    onValidate?: UserNotificationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserNotificationUpdateForm(props: UserNotificationUpdateFormProps): React.ReactElement;
