/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { BusinessUploadHistory } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function BusinessUploadHistoryUpdateForm(props) {
  const {
    id: idProp,
    businessUploadHistory: businessUploadHistoryModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    uploadDate: "",
    completionDate: "",
    validCount: "",
    total: "",
    invalidCount: "",
    originalPath: "",
    invalidPath: "",
  };
  const [uploadDate, setUploadDate] = React.useState(initialValues.uploadDate);
  const [completionDate, setCompletionDate] = React.useState(
    initialValues.completionDate
  );
  const [validCount, setValidCount] = React.useState(initialValues.validCount);
  const [total, setTotal] = React.useState(initialValues.total);
  const [invalidCount, setInvalidCount] = React.useState(
    initialValues.invalidCount
  );
  const [originalPath, setOriginalPath] = React.useState(
    initialValues.originalPath
  );
  const [invalidPath, setInvalidPath] = React.useState(
    initialValues.invalidPath
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = businessUploadHistoryRecord
      ? { ...initialValues, ...businessUploadHistoryRecord }
      : initialValues;
    setUploadDate(cleanValues.uploadDate);
    setCompletionDate(cleanValues.completionDate);
    setValidCount(cleanValues.validCount);
    setTotal(cleanValues.total);
    setInvalidCount(cleanValues.invalidCount);
    setOriginalPath(cleanValues.originalPath);
    setInvalidPath(cleanValues.invalidPath);
    setErrors({});
  };
  const [businessUploadHistoryRecord, setBusinessUploadHistoryRecord] =
    React.useState(businessUploadHistoryModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(BusinessUploadHistory, idProp)
        : businessUploadHistoryModelProp;
      setBusinessUploadHistoryRecord(record);
    };
    queryData();
  }, [idProp, businessUploadHistoryModelProp]);
  React.useEffect(resetStateValues, [businessUploadHistoryRecord]);
  const validations = {
    uploadDate: [],
    completionDate: [],
    validCount: [],
    total: [],
    invalidCount: [],
    originalPath: [],
    invalidPath: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          uploadDate,
          completionDate,
          validCount,
          total,
          invalidCount,
          originalPath,
          invalidPath,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            BusinessUploadHistory.copyOf(
              businessUploadHistoryRecord,
              (updated) => {
                Object.assign(updated, modelFields);
              }
            )
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "BusinessUploadHistoryUpdateForm")}
      {...rest}
    >
      <TextField
        label="Upload date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={uploadDate && convertToLocal(new Date(uploadDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              uploadDate: value,
              completionDate,
              validCount,
              total,
              invalidCount,
              originalPath,
              invalidPath,
            };
            const result = onChange(modelFields);
            value = result?.uploadDate ?? value;
          }
          if (errors.uploadDate?.hasError) {
            runValidationTasks("uploadDate", value);
          }
          setUploadDate(value);
        }}
        onBlur={() => runValidationTasks("uploadDate", uploadDate)}
        errorMessage={errors.uploadDate?.errorMessage}
        hasError={errors.uploadDate?.hasError}
        {...getOverrideProps(overrides, "uploadDate")}
      ></TextField>
      <TextField
        label="Completion date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={completionDate && convertToLocal(new Date(completionDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              uploadDate,
              completionDate: value,
              validCount,
              total,
              invalidCount,
              originalPath,
              invalidPath,
            };
            const result = onChange(modelFields);
            value = result?.completionDate ?? value;
          }
          if (errors.completionDate?.hasError) {
            runValidationTasks("completionDate", value);
          }
          setCompletionDate(value);
        }}
        onBlur={() => runValidationTasks("completionDate", completionDate)}
        errorMessage={errors.completionDate?.errorMessage}
        hasError={errors.completionDate?.hasError}
        {...getOverrideProps(overrides, "completionDate")}
      ></TextField>
      <TextField
        label="Valid count"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={validCount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              uploadDate,
              completionDate,
              validCount: value,
              total,
              invalidCount,
              originalPath,
              invalidPath,
            };
            const result = onChange(modelFields);
            value = result?.validCount ?? value;
          }
          if (errors.validCount?.hasError) {
            runValidationTasks("validCount", value);
          }
          setValidCount(value);
        }}
        onBlur={() => runValidationTasks("validCount", validCount)}
        errorMessage={errors.validCount?.errorMessage}
        hasError={errors.validCount?.hasError}
        {...getOverrideProps(overrides, "validCount")}
      ></TextField>
      <TextField
        label="Total"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={total}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              uploadDate,
              completionDate,
              validCount,
              total: value,
              invalidCount,
              originalPath,
              invalidPath,
            };
            const result = onChange(modelFields);
            value = result?.total ?? value;
          }
          if (errors.total?.hasError) {
            runValidationTasks("total", value);
          }
          setTotal(value);
        }}
        onBlur={() => runValidationTasks("total", total)}
        errorMessage={errors.total?.errorMessage}
        hasError={errors.total?.hasError}
        {...getOverrideProps(overrides, "total")}
      ></TextField>
      <TextField
        label="Invalid count"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={invalidCount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              uploadDate,
              completionDate,
              validCount,
              total,
              invalidCount: value,
              originalPath,
              invalidPath,
            };
            const result = onChange(modelFields);
            value = result?.invalidCount ?? value;
          }
          if (errors.invalidCount?.hasError) {
            runValidationTasks("invalidCount", value);
          }
          setInvalidCount(value);
        }}
        onBlur={() => runValidationTasks("invalidCount", invalidCount)}
        errorMessage={errors.invalidCount?.errorMessage}
        hasError={errors.invalidCount?.hasError}
        {...getOverrideProps(overrides, "invalidCount")}
      ></TextField>
      <TextField
        label="Original path"
        isRequired={false}
        isReadOnly={false}
        value={originalPath}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uploadDate,
              completionDate,
              validCount,
              total,
              invalidCount,
              originalPath: value,
              invalidPath,
            };
            const result = onChange(modelFields);
            value = result?.originalPath ?? value;
          }
          if (errors.originalPath?.hasError) {
            runValidationTasks("originalPath", value);
          }
          setOriginalPath(value);
        }}
        onBlur={() => runValidationTasks("originalPath", originalPath)}
        errorMessage={errors.originalPath?.errorMessage}
        hasError={errors.originalPath?.hasError}
        {...getOverrideProps(overrides, "originalPath")}
      ></TextField>
      <TextField
        label="Invalid path"
        isRequired={false}
        isReadOnly={false}
        value={invalidPath}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uploadDate,
              completionDate,
              validCount,
              total,
              invalidCount,
              originalPath,
              invalidPath: value,
            };
            const result = onChange(modelFields);
            value = result?.invalidPath ?? value;
          }
          if (errors.invalidPath?.hasError) {
            runValidationTasks("invalidPath", value);
          }
          setInvalidPath(value);
        }}
        onBlur={() => runValidationTasks("invalidPath", invalidPath)}
        errorMessage={errors.invalidPath?.errorMessage}
        hasError={errors.invalidPath?.hasError}
        {...getOverrideProps(overrides, "invalidPath")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || businessUploadHistoryModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || businessUploadHistoryModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
