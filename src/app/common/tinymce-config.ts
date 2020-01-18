import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/table';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/media';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/hr';
import 'tinymce/plugins/pagebreak';
import 'tinymce/plugins/nonbreaking';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/toc';
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/wordcount';
import 'tinymce/plugins/imagetools';
import 'tinymce/plugins/textpattern';
import { ConfigSetting } from './config-setting';
const URL = ConfigSetting.IMAGE_UPLOAD;
export class TinymceConfig {

    public static Init(): any {
        const ckeConfig = {
            skin: false,
            mode: 'specific_textareas',
            editor_selector: 'bodytext',
            branding: false, paste_data_images: true,
            readonly: 1,
            plugins: 'preview fullscreen image link media table ' +
                'hr pagebreak nonbreaking anchor toc  advlist lists wordcount  ' +
                'imagetools textpattern  ',
            toolbar: 'formatselect | bold italic strikethrough forecolor backcolor permanentpen formatpainter | ' +
                ' link image media pageembed | alignleft aligncenter alignright alignjustify | ' +
                ' numlist bullist outdent indent | removeformat',
            entity_encoding: 'raw',
            image_advtab: true,
            importcss_append: true,
            height: 400,
            template_cdate_format: '[CDATE: %m/%d/%Y : %H:%M:%S]',
            template_mdate_format: '[MDATE: %m/%d/%Y : %H:%M:%S]',
            image_caption: true,
            content_css: [],
            tinycomments_mode: 'embedded',
            content_style: '.mce-annotation { background: #fff0b7; } .tc-active-annotation {background: #ffe168; color: black; }',
            images_upload_handler: function (blobInfo, success, failure) {
                const token: string = ConfigSetting.GetAuthenToken;
                var xhr, formData;
                xhr = new XMLHttpRequest();
                xhr.withCredentials = false;
                xhr.open('POST', URL);
                xhr.setRequestHeader("Authorization", `Bearer ${token}`);
                xhr.onload = function () {
                    if (xhr.status != 200) {
                        failure('HTTP Error: ' + xhr.status); return;
                    }
                    var json = JSON.parse(xhr.responseText);
                    if (!json || typeof json.fullUrl != 'string') {
                        failure('Invalid JSON: ' + xhr.responseText); return;
                    }
                    success(json.fullUrl);
                };
                formData = new FormData();
                formData.append('file', blobInfo.blob(), blobInfo.filename());
                xhr.send(formData);
            }
        };
        return ckeConfig;
    }
}