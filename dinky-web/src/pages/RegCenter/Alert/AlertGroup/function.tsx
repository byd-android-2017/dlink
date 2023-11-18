/*
 *
 *  Licensed to the Apache Software Foundation (ASF) under one or more
 *  contributor license agreements.  See the NOTICE file distributed with
 *  this work for additional information regarding copyright ownership.
 *  The ASF licenses this file to You under the Apache License, Version 2.0
 *  (the "License"); you may not use this file except in compliance with
 *  the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

import { Alert } from '@/types/RegCenter/data.d';
import { Tag } from 'antd';

/**
 * parse alertInstanceIds to array and rebuild form data
 * @param values
 */
export const getFormData = (values: Partial<Alert.AlertGroup>) => {
  let alertInstanceIds: string[] = [];
  if (values && values.alertInstanceIds && values.alertInstanceIds !== '') {
    alertInstanceIds = values.alertInstanceIds.split(',');
  }
  return { ...values, alertInstanceIds: alertInstanceIds };
};

/**
 * build form data
 * @param values
 * @param params
 */
export const buildFormData = (values: Partial<Alert.AlertGroup>, params: any) => {
  let newValue = values;
  if (params.alertInstanceIds) {
    newValue.alertInstanceIds = params.alertInstanceIds.join(',');
    delete params.alertInstanceIds;
  }
  return { ...newValue, ...params };
};

export const buildAlertInstanceSelect = (alertInstance: Alert.AlertInstance[]) => {
  return alertInstance.map((item) => {
    const tag = (
      <>
        {' '}
        <Tag color='processing'>{item.type}</Tag>
        {item.name}
      </>
    );
    return {
      label: tag,
      value: item.id.toString()
    };
  });
};
