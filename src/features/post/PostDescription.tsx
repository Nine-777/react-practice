import React, { useState } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import FormButton from '../../components/button/FormButton';
import updatePost, { UpdatePostRequest } from '../../api/updatePost';
import deletePost from '../../api/deletePost';

type Props = {
  id: number;
  title: string;
  body: string;
};

export default function PostDescription(props: Props) {
  // 変更前タイトル(保存用変数)
  const [saveTitle, setSaveTitle] = useState<string>('');
  // 変更前本文(保存用変数)
  const [saveBody, setSaveBody] = useState<string>('');
  // 編集状態フラグ => true: 編集状態, false: 未編集状態
  const [isEdit, setIsEdit] = useState<boolean>();
  // タイトル
  const [title, setTitle] = useState<string>(props.title);
  // 本文
  const [body, setBody] = useState<string>(props.body);

  /**
   * キャンセルボタン押下時処理
   */
  const onClickCancel = () => {
    // 画面項目の値を編集前の状態に戻す
    setTitle(saveTitle);
    setBody(saveBody);
    // 未編集状態にする
    setIsEdit(false);
  };

  /**
   * 更新ボタン押下時処理
   */
  const onClickUpdate = () => {
    const funcApi = async () => {
      try {
        // APIで使用する項目を設定
        const updatePostRequest: UpdatePostRequest = {
          id: props.id,
          title: title,
          body: body,
        };
        console.log(updatePostRequest);
        // 投稿更新API実行処理
        const response = await updatePost(updatePostRequest);
        // 更新後の値を画面項目に反映
        setTitle(response.data.title);
        setBody(response.data.body);
        // 更新後の値を保存用変数に格納
        setSaveTitle(response.data.title);
        setSaveBody(response.data.body);
        // 未編集状態にする
        setIsEdit(false);
      } catch {
        console.error('更新ボタン押下時処理に失敗しました。');
      }
    };
    funcApi();
  };

  /**
   * 編集ボタン押下時処理
   */
  const onClickEdit = () => {
    // 画面項目の現在値を保存用変数に格納
    setSaveTitle(title);
    setSaveBody(body);
    // 編集状態にする
    setIsEdit(true);
  };

  /**
   * 削除ボタン押下時処理
   */
  const onClickDelete = () => {
    const funcApi = async () => {
      try {
        console.log(props.id);
        // 投稿削除API実行処理
        await deletePost(props.id);
        // FIXME: 一覧画面に遷移するルーティング処理を実装する
      } catch {
        console.error('削除ボタン押下時処理に失敗しました。');
      }
    };
    funcApi();
  };

  const buttons = isEdit
    ? [
        { label: 'キャンセル', onClick: onClickCancel },
        { label: '更新', onClick: onClickUpdate },
      ]
    : [
        { label: '編集', onClick: onClickEdit },
        { label: '削除', onClick: onClickDelete },
      ];

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          mb: 2,
        }}
      >
        <Typography variant="h6">ユーザ名</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {buttons.map((button, index) => (
            <FormButton key={index} label={button.label} handleClickButton={button.onClick} />
          ))}
        </Box>
      </Box>
      <TextField
        id="title"
        label="タイトル"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={!isEdit}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        id="body"
        label="本文"
        value={body}
        multiline
        onChange={(e) => setBody(e.target.value)}
        disabled={!isEdit}
        fullWidth
        sx={{ mb: 2 }}
      />
    </>
  );
}
