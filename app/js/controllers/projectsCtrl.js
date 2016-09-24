angular.module('karakeeb').controller('projectsCtrl', ['$scope', '$state', '$timeout', 'karakeebSrvc',
    function($scope, $state, $timeout, karakeebSrvc){

        'use strict';


        $scope.projects = [
                {
                    title: "Tifli",
                    client: "Dubai healthcare authority",
                    year: "2016",
                    output: ["Hybrid mobile application"],
                    roles: {
                        ux: {
                            percentage: 60,
                            roleSet: ["ux", "usability"]
                        },
                        ui: {
                            percentage: 80,
                            roleSet: ["photoshop", "illustrator"]
                        }
                    },
                    slides: ["http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150"]
                },
                {
                    title: "Hayati",
                    client: "Dubai healthcare authority",
                    year: "2016",
                    output: ["Hybrid mobile application"],
                    roles: {
                        ux: {
                            percentage: 80,
                            roleSet: ["ux", "usability"]
                        },
                        fe: {
                            percentage: 40,
                            roleSet: ["angularJs", "nodeJs", "ionic"]
                        }
                    },
                    slides: ["http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150"]
                },
                {
                    title: "OnePOS",
                    client: "Vodafone Gernamy",
                    year: "2016",
                    output: ["Web application"],
                    roles: {
                        ux: {
                            percentage: 90,
                            roleSet: ["ux, usability"]
                        },
                        ui: {
                            percentage: 70,
                            roleSet: ["illustrator"]
                        },
                        fe: {
                            percentage: 60,
                            roleSet: ["angularJs", "nodeJs", "ionic"]
                        }
                    },
                    slides: ["http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150"]
                },
                {
                    title: "ooredoo.dz",
                    client: "ooredoo corporate",
                    year: "2014",
                    output: ["Online portal"],
                    roles: {
                        ux: {
                            percentage: 90,
                            roleSet: ["ux", "usability"]
                        },
                        ui: {
                            percentage: 85,
                            roleSet: ["illustrator"]
                        },
                        fe: {
                            percentage: 70,
                            roleSet: ["angularJs", "nodeJs", "ionic"]
                        }
                    },
                    slides: ["http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150"]
                },
                /*{
                    title: "Incorta",
                    client: "Incorta inc.",
                    year: "2014",
                    output: ["iPad application", "Hybrid Web application"],
                    roles: {
                        ux: {
                            percentage: 50,
                            roleSet: ["ux", "usability"]
                        },
                        ui: {
                            percentage: 80,
                            roleSet: ["illustrator"]
                        },
                        fe: {
                            percentage: 95,
                            roleSet: ["angularJs", "nodeJs", "ionic"]
                        }
                    },
                    slides: ["a", "b", "c", "d", "e"]
                },*/
                {
                    title: "HeadsUP",
                    client: "Treze Technology inc.",
                    year: "2013",
                    output: ["Web application"],
                    roles: {
                        ux: {
                            percentage: 70,
                            roleSet: ["ux"]
                        },
                        ui: {
                            percentage: 90,
                            roleSet: ["photoshop", "illustrator"]
                        },
                        fe: {
                            percentage: 60,
                            roleSet: ["angularJs", "nodeJs", "ionic"]
                        }
                    },
                    slides: ["http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150"]
                },
                {
                    title: "StarWallet",
                    client: "StarWallet labs",
                    year: "2013",
                    output: ["Hybrid mobile application", "Web application"],
                    roles: {
                        ux: {
                            percentage: 70,
                            roleSet: ["ux"]
                        },
                        ui: {
                            percentage: 90,
                            roleSet: ["photoshop", "illustrator"]
                        },
                        fe: {
                            percentage: 60,
                            roleSet: ["angularJs", "ionic"]
                        }
                    },
                    slides: ["http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150"]
                },
                {
                    title: "Vodafone.com.eg",
                    client: "Vodafone Egypt foundation",
                    year: "2012",
                    output: ["Online portal"],
                    roles: {
                        ux: {
                            percentage: 65,
                            roleSet: ["ux", "usability"]
                        },
                        ui: {
                            percentage: 90,
                            roleSet: ["photoshop"]
                        },
                        fe: {
                            percentage: 60,
                            roleSet: ["angularJs", "nodeJs", "ionic"]
                        }
                    },
                    slides: ["http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150"]
                },
                {
                    title: "Government.ae",
                    client: "UAE Government",
                    year: "2011",
                    output: ["Online portal"],
                    roles: {
                        ux: {
                            percentage: 80,
                            roleSet: ["usability"]
                        },
                        ui: {
                            percentage: 70,
                            roleSet: ["photoshop", "illustrator"]
                        },
                        fe: {
                            percentage: 40,
                            roleSet: ["nodeJs", "ionic"]
                        }
                    },
                    slides: ["data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMQEhUQExIWFhUVFhcVFRUVFRUVFRUVFRUWFhUVFRcYHSggGBolHRUVITEhJSktLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGi0lHSUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALEBHAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAACAwABBAUGBwj/xAA+EAABAwIDBAgFAgUDBAMAAAABAAIRAyEEEjFBUWFxBROBkaGxwfAGFCIy0ULhBxaCsvEVM1IXcsLSI0Ni/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EACoRAAICAgEDAwQCAwEAAAAAAAABAhEDEjEEIUEFE1EUIjKBkbFCYaEV/9oADAMBAAIRAxEAPwD6nXw25c+s2F1q1Ihc6vSK9LFL/Z5skYHo2vROpoHrptMyGdZKZh/uELCXQqFeEaWuxalRt6RgcyuWCmYrEZ7rI561xwajQpStmlz4Cz50s1Upz1soEuQcApFdqvOqL1WtC2EtpBE4Ii5LcU6CxNULPUpytLjKU8QmhMxvpkJa1kpb2qyGJD1edQsQFqdILIXKwhhRLUVkc1AQmSqRQNii1SEzKplTJAAVlqIBXCQABqYxigCIFDAewBolJJlRzpUCSQNkCMKgrCqiGFCotRhXCKEfY3rJWaCum5krHWwy+XhJHsThJHIxNEBc94XYxGGK59Wiu/FNHPJHPelFa6lNZ3sXVFmdErYQgSLjgsT2rtdHPn6T2LD0jh8j+B0Thke2rHKPa0c1zUDgtDglOC6UzIQQqTHNSnBaLuSEUlwRFCSnqOxZKW5MKgaigsyuagW7IhOHlKwoxoSFofh4SzTT7CEFqotT+rVZEWIRlUhOyKi1OwFQpCZCqECBhSEcKQkICFcI4UhAgIVgI4VgIAEBEArAVgIEWAihQBHCBH2hU5WoV8ifRszVWrHWwwK6Lkh7QtoSaOeUUcerg1jqYMruuaEp1Mb10xzNGTxo5TcNkvMHgldI/W0HaPFdZ9O2iyVaYGrVrDJbt8kuPajz7qZ3JbqS7r6bUl1Nq6lmMXjOG6mluYu1UohZ34ZbRzIhwOQ5iWWrp1MOFndQW0ciM3AxZVMie6kllq0uyQQ1SCpdTMVLRVlGUBBTM6rOdyVBYOXgluanZ3blV9yQ7EEcEt4Wh5SXBUiWILVMqblUyqiBWVSE3KqyoAXCuEeVXlQAuFcI4VwgQACIBFCuECBARwoAjAQI+xqKKL5E+jBcstUxtTqrVkrNJ2rWCMJspzglOjelvBCU5y6FExcx1t6BxG9Z3OKU55WigS5jnBu9JdSbvSzVKB1ZaqLIckSpRWepTITHV+CRUqkraKkQ2hLzCQ8jcmuBKWaZW8TNsU4Df4JbqXEJrqaAtWiZLEmkhyJpCEhWmSBlUlXCEhMLKc470otTS1DkQKxJahLVoyKixMRnyqsq0ZVWVFgIyqZU7KplRYhGVXlTsqmRFgJyqZU7q1gx3SdOlInMQRLW6i8Ht4KMmWGNXJ0VGDk6SNWVSErCY1lR2Vpv7t4JuKrtpAl5AhubXYDHqj3Ya7X2E4SuqCARQsPS9cChnaZD4gg7NZG9efpdMkAAvdPBrojZEDSIXJl6/Hjye3I1h08pR2R+jSVWZWUBC8JHrybIXpVQSjISnNVoybMz6SS7D8Vpc1Kc1bRbMmjI+nCQ5i3OCW5i2UjNowOYlupre5iWWLVTIcTCaSA01tc1KcxaKYqMjglOatpYgNNWpE0YXU0s010ThzuQ/KncrWRC1ZzTTQli6nyLkJwZGsKlmQtGcosQ9Wus3Cib6JDoGgVrLfAnCjn9WdyvqDuK2FyWVWzFSM/UHh3hV1Q3jxTiwqdWnsKhBphVkC0dSqq5WNL3WDRJJSc0lbYaiMgV9Vw99qxYfp6k9zAHAZw6LtBBaSMpE6m0BYf5iHzT6RA6trT9UmR1YJeQIMybDkFzPrcSr7uTRYZfB2S3ZwnTdH5ScRVbTy5jGZwaJ3mY8l5r+ZGurFzQ43+hk3Mj6SJO8zC8xi+laz3ZfqJmZJmAR2iBs7Vw5vV1FfbG/wCjeHSOT5PadKdOspl1Mh08LGJuRI14LxWJx4Y4uBcZmc0S6QN21Z8ViCYvNoO8H8rDiqx0iTMb9m1eNl6vLnmpS8cHbjwxgqRsHTTmPFWnsdmgmRtkEDt1TOmPiL5hxcfpP2xoAATzWOngidm+b8IHbc96y4nox0wCI2uOg/7R72qPeUlo5drsv26e1dz0FLHmq0Up+hlgJE314R+6zYvGDN2Wul4Ki2i3KCZJudTBsB5phLWWdc7yCVy5JbTcnbLiqVI/VqohWovXJAIQFqcqhOzNwM7mJTqa2ZVRYqUyXjOe5iA010urCqAFayEPH8nN+WJ2KfJ8QtrylFk7VamxaIxVMNCQ+kumWcUHUSrWSuSXj+DlGmoKErpfKc+5WcJwPgr95ErEzntpAakIitowQOwq3YED9Kl5Y/Jaxs5rnDeluA1ldb/T+De5V8g7/wDPcE1miHtSODXbm3xsSxg3HYvRfIO/5IHYF/8AyVrqkuCPp35OB8g7d4K/kHbiu58q8IRhjtHgn9Ux/To4ZwRQPw0amNlzGtguj0tj6GFbmrPYz6S4BxALogfSNtyB2r5p8T/HJr0nU2Ugym4jaS8gGbxYfpsufN6msa+X4Q101npsV0rRYwvDg6P0g/VqQRfQ2NjuXl+nPiEV6LabQA4uPWX+kNBcABNyTDTcbF4DE45xhoLoJzEAkgnSRtmy3YOoSASbGJNhykbTA7V53V+oZcmNrhM2x9PGLslau6foJBAhpvYEEGNu0rPjnuqzUkkuuTOp23/O9QV2vqEZRDQeZOwcNCnYx8tABDZMXi4sLWXBvJUjopciKcPnLJF4c5gDhAF4kgbRY7kdeveAJAEmNdkzu1UFUMbGru8nfHdok4bFQ0jLm3uj6dwGvEewlK5NyoF27FYlujjIuBpEbY971ow1MOJdqAN5guH+B3rn1+k5hkCJvv7jwjuWjEYjKCzgABGzZbam4SpIA3Y+QW6QbEkRwHvcsjqxIJsBv2H8pYw9R7S55DWk7RBT/wDTnmnABPO0k3ET70VqMI+QtsxVMdli4I5eCYX5gHFhMi0HZyGi24H4d2vkkagaTxsug7oaY+k6cAiWfFF0gpn1foz+MdEgdfh3tdtNMtc02uQHEEX2X5r13QnxtgcWBkxDGuNslQim+dwBMO/pJX5cOPM6A32j8LThsXTOstO2LjxXobNLujPY/XYKgM3C/LFHHODS2nWcBqQHuaN31AWUw3S2IaCynXqBoOY9VUc0SQBJDSJMBKOWLBs/VCi/PGA/iZ0hh2tYawe1paR1rGklgtkL4kg7zfivWdG/xnaf9/Dxrek6d0fdEbdu5aWGyPrJCEtXi6H8VejnavqN50yf7SUX/VHo6Xf/ACPtoeqf9UgG1uMXjRGwNI9j1SjmAXiV5jo7+InR9d7mCuGZQCHVYptdJj6cxmRbULqj4kwjmh7cVQgxc1WD7tJBMg8CnsFI2nEAfpQnGcFTHU6ozU3NcDtYQ4HtCW/DlUtSXsg/nFPneCzOoncUBoO3HuTqItmbBjeCv5sLEKR3Gy4f80YINznENi5DZaHuhzm/S0m8lphS9Fyxps9M7GbkDsYV5ul8W4Z7nwDDLAQBmgOvrMWFyP1BeCxX8Ta1Ko85Gua6MjCbNuJIOsQD3qHkgml8ldz66ekDuSqnSBK+Y/8AVek8tijl+sB+Zwsw7o2rN05/EUirlw2VzA76HRZ4g/cDB2i2wtVvJij3ZH3Pg+pnpArnN+KqDmVKjKrKgptLnBrgT9PDn5r5R0t8XYnEMdTzZWkCQ0RoZ+7WPwvK9H4aoH9YSSTAIaLQTfNwt4Bc0+sx09V/PyWoy8nV6d6Tfi6+cuc7M+frMnKHTHCBu7lzsS5znQGmNTI+mNTeeAWv/TXOcHQ4xEQ2Be5ueS2t6Le7UBvAkXEDdPsLyHmhHyaUcKnRaZ2XgkW1MxuhVSxTRNOC0aERc8ZPYu5R6BIJmprqBJvEcPZWlnQtIOzEEnuHcEPqsXltgebrUCc2UgPIu4xExeN1pSsLWfVL2tBP0/TF5IgL2fyVKxLGmNJAdHemzFhbks/rVVa2B41vQ9d4c4tcCRABMXOuuywXQwvQT8ozloMCRJMHevQyhJWcusySVdkLg4VH4Zph2dzi4jZH06Rotx6LpmJkxyE87LcWoS1Zyz5Jd3ILF/Ks1yzO+SPFHlG4KZeKuFnb+Qtgqw/iFIUlAj57g8cwC7RPIX3+S0PwQeOsY4DgQGgbgDs0Oq4IctNHFuaIDjfZwX08sbTuDEPqVSJGh0P4Q06pGhSqjSfqEkHtjnuVBjv+J7it1VEHQoY06EmNsandO9OfWbFmDiRIPmuZTY4fpPcVrp4Wq77aTzyY78KXrHvwId1zY2z6Im4l0a204lSj0HiT/wDS7tLW/wBxC10/hjFHVrW86jfQlS+owLma/lDpimV3RMW10sr692sduVa/5UxJ1dT7Xu/9U2l8JV9tRg5F59AsX1nTr/NBrIzUsZUYCQ4tndIJWqh01iGNluIqgE6Cs4B3YHXW2j8JnV1aeTNDvu5bx8PMtL3mABbKNNunauWfqOCPDv8ATKUH5OS7p3EuaC6tWgfbNV9g7XKCfJK/1XEAhwrVACL/AFv0Gg13r0VLoWi2PpLo/wCTi7v3rSMFTH6B2ifNc8vVYL8YlKBwsH8QYlrTQFeoWOH1sLi9kTMAGQDxF1wcZUrvfDRUcBYQ1xAEkxwFz3r37WNGjQOQCvNCx/8ASd3rf7HqeE+QxdQT1dSbASQ20yfuIt+U3+WMTUguyNO3M+bcmgr2hqKjUUv1LK+EkGqPJ0vgt36q4HJhPiXBdDC/CtJhDi+o4ji0DynxXZNRVmlZS63qJKnL+gpC24Gk0RlnnJTgQLAAchCCCff5UjiuZtvljDL0JKBxCoORQB3VOttQyfc+Kob06EFHvRQhUXd3YgNUHvTpgMnkhlKdVCEVfe1PVisdI3oY4pWYqusM/txVahY0kRqqc7cEkvOnfKF1Q/tvT1Cx+aVRqcVlLzcnQKMeQNVWgHzOE+nh3u0aT2L19HCEfbQI7/wtrcHWOlPvK9qfXpeP+knl+i6FSi8VMkkbHAx2xC9Xg+kHO+6gwcdB/aVbejKp1YwcyT5FWOh3na0cgT5rhz58eV3KgpnSpYhn6i1vJx/AR/MUtczT2krEzobe89gWin0awfuAuCSx/LL7mlmIp7C3vTm1GnQjsSadBrdAO4JkR7hYyS8DGBysOSOsChrc0tR2OLlRqQs3WyrD09BWPz8e5Q1BuSmlEUqHZC9SSgMwoTxhVQrL98lDCVPdy0QyffgnqFjnHgpnPYkh5gC1/fJVn3+fenqKww/3oqBG5Le+yk7VVBYZqQq66QkPJQ06hOz3tVaCs0CoUJdPqgLvVATJ2oUQGAE2VO7vZugHNRjJJmwVUFF23aq2kcO1VXLRAQlwAHO99mn4RQBGp5qZzyQzPLZ6qhJBCdCsjn7fZQOMxb37hU2n9V9Bs42KMH34JiAJ3eW1W6Nx7pRMcbwJgz6mDs1S3CN/f+EwO01DUAPPuQC6sMv7C5Cy6bY1P5V22DwULAo1AyRvRSI07/VCT/lU4HxQAyZ7NyGO3vQE++KLN79EUAL7aKXQ9bciR3dijnWToBhEKm62lL6wafuq64DZPNFMQeYk+nvkqgjU+iWcSTe3dPYgNXbrt/CrVgNcdyon3Mpb3cLFBn8rb7lUoiNIeEt75tr++5Jc4ADeVTJ3Abt8/wCE1EBj3Hv3d3qluOhi5PbrCbkvr2SqDSbzofz+yE0ArNb87wp5+7eCMjZ7vb8IaryI81QAkxKjMUPtGo0hFlB13du/0CpgAFtk80+wiEu1ufexUXZSbG23Z7ujpwBvnfa8CR5I2gREEXvvHsylYGVlWYsf82R7Tb9k4MG/b6Sl13SSB4D3ZO7YA8QNllXWG4tw9fGFWaBxudNyqTt2jQeN+zknQgg+f0/iUfW3mNVnz7IdIIueJhFF9RoRftTcQGCoPfcl0qoNhx0VCmdDljjMm5EDd4oaLS0CBcbYj1Ma+CdKgCNfzkdw170l75vdMsLReJ8kHW8u2ypIDvke9yGo+2qzOcdJv+fZRN4rj1Lsax0x7CmbX9u5JdUi2oF9vPVA4mxA8YvxT1Ae/EBvhxQ9dw9I5pFJua5ItMbN9uKa9oEXO/8AbwT1S7BZVSrG7ft9wqeePhwSyBOpnnbmicdx/feqoAjETOqW6tOw30V592zZF9lylyT+eWzx8E0hBGdeSAam44dv+ExrLyQLAW4bAgLb6WOp2yIt3JoCNcNPZKjS60AcJ17Vb4mBbgg+rNp2+iY7GPBIuRx29ysMAt3e/eigsLxzhU5hJF49+ohSIJlETOp5pwYAZI4+96VTFyBOmvHao5zRtv58EnbAuqbzz89/cltINid3qoakxJAEbuQV/bpAPDt1TqkBZMxYjSP3QEzfw2qnVDPeTz/wVnrw8ans3+5VRiI0OjWbzHv3vVMaN+/86clmfU3jbA33107Lq6lrHYRrtvt71WoGwuAiAO6Tu2pQfvvw3R/lLquvytPikNebAnW357UKADesbcXtHcrZVJEgRsvuPsqg0Tw29kac1CybTpHDn6p9hFiqBJO+3fbyVOxMzPEzw/KplOTpB1tpunxPcozJoG79Bv8Acp0gLc45vti9wZ12zNxCsCbDmTx1/PgliqHXG2du7XuhQ1CdARG2x4BFADVBdAzEnTlfzsYTqjosLn17OcIXtAFtuvvtQh+UEkbYntP4PgjkCUsxMuIEyOwJjXNGgniLgpNasJvaPxHaljEBus3vp73J6thZ1h9/YPMJ7fRRRcsiyhoPe5LO3n6qKIQwNvehqaf1HyVqK0IDC/b3+aIeo9VFE3yxCsL9x7fMpjft98FaicuRMoa/0+iKns97VFEmMGnqfe9aW6f0/hRRRIBbtvM+SW3Uc1FE0IbT17HLLi/uHvaVSiqH5B5ArbOTfMI8L9reTfVRRW/xGOq/7g5jyCQzU/8Ad6uUUUx4/Qhb9vvcl4r9XIeYUUWseUCG4jQ8ihrau5uUUSXgTAGo5eqcft7/ADKtRDAKjozmPJq52D+53M/2hRRVDhgH0f8AcOTv/BGdB/R6KKKpfkHgt+va3zCVX/2/6T6qKIj4F5Lr69//AIo3eg/tCiiPCHE//9k=", "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQR0-Voqo66Yz6YeJ6h1kWTHFyfTWenZzp9-uhb_LtMqOmEmvVy", "https://ckoppitzdd14.files.wordpress.com/2014/08/pretty-landscape.jpg", "http://placehold.it/350x150", "http://placehold.it/350x150"]
                }
            ];





        // defaults
        //karakeebSrvc.appear();
        $timeout(function(){
            $scope.scroller = true;
            fillViewport();
        })


        // General variables
        function fillViewport() {
            var window_height = window.innerHeight, //$(window).height(); doesn't work
                header_height = 80,
                intro_height = $(".intro").outerHeight(),
                mainBodyContent_YMargin = (window_height - header_height - intro_height) / 2,
                standardValue = window_height - header_height;
            if (standardValue > intro_height) {
                $(".intro").css({
                    "margin-top": mainBodyContent_YMargin,
                    "margin-bottom": mainBodyContent_YMargin
                });
            } else {
                $(".intro").css({
                    "margin": 0
                });
            }
        };

        $scope.slideDown = function() {
            karakeebSrvc.scrollTo($(".projectsWrapper").offset().top - 80, 500);
        }

        $(window).resize(function(){
            fillViewport();
        });


}]);